<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
           'title' => 'required|string|min:3',
            'slug' => 'nullable|alpha_dash|unique:projects,slug',
            'summary' => 'nullable|string|max:500',
            'stack' => 'nullable|string', 
            'github_url' => 'nullable|url',
            'demo_url' => 'nullable|url',
            'primary' => 'nullable|string',
            'background' => 'nullable|string',
            'text' => 'nullable|string',
            'accent' => 'nullable|string',
            'cover' => 'nullable|image|max:4096',
            'gallery.*' => 'nullable|image|max:4096',
            'is_published' => 'boolean',
            'priority' => 'integer|min:0', 
        ];
    }
}
