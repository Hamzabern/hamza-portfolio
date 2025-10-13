<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'     => ['required','string','max:120'],
            'email'    => ['required','email','max:160'],
            'company'  => ['nullable','string','max:160'],
            'budget'   => ['nullable','string','max:40'],
            'timeline' => ['nullable','string','max:40'],
            'types'    => ['array'],
            'types.*'  => ['string','max:40'],
            'message'  => ['required','string','max:5000'],
            'file'     => ['nullable','file','max:5120'], 
            'consent'  => ['accepted'],
        ];
    }
}
