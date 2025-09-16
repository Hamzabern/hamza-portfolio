<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $r) {
        
        if ($r->filled('website')) {
            return response()->json(['ok'=>true], 200);
        }

        $data = $r->validate([
            'name'=>'required|string|min:2|max:80',
            'email'=>'required|email|max:120',
            'subject'=>'nullable|string|max:120',
            'message'=>'required|string|max:5000',
        ]);

        $c = Contact::create([
            ...$data,
            'meta' => [
                'ip' => $r->ip(),
                'ua' => $r->userAgent(),
                'referer' => $r->headers->get('referer'),
            ],
        ]);

        
        try {
            Mail::to(config('mail.from.address'))->send(new \App\Mail\NewContactMail($c));
        } catch (\Throwable $e) {
            // pas bloquant en dev
        }

        return response()->json(['ok'=>true], 201);
    }
}

