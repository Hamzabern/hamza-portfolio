@component('mail::message')
# Nouveau message

**Nom:** {{ $c->name }}  
**Email:** {{ $c->email }}  
**Sujet:** {{ $c->subject ?? '—' }}

@component('mail::panel')
{{ $c->message }}
@endcomponent

@component('mail::subcopy')
IP: {{ $c->meta['ip'] ?? '' }} — UA: {{ Str::limit($c->meta['ua'] ?? '', 80) }}
@endcomponent
@endcomponent
