<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __invoke(ContactRequest $req)
    {
        $data = $req->validated();
        $to = config('mail.to.address', env('MAIL_FROM_ADDRESS', null));
        if (!$to) return response()->json([
            'ok' => false,
            'error' => 'MAIL_TO_ADDRESS is not set'
        ], 500);

        Mail::to($to)->send(new ContactMail($data));
        return response()->json($req->all(), 200);
    }
}
