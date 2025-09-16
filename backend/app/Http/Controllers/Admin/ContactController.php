<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index(Request $r) {
        $q = Contact::latest()->paginate(12);
        return view('admin.contacts.index', compact('q'));
    }
    public function show(Contact $contact) {
        return view('admin.contacts.show', compact('contact'));
    }
    public function destroy(Contact $contact) {
        $contact->delete();
        return back()->with('ok','Message supprimé');
    }
}
