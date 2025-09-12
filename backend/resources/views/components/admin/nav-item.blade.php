@php
  $isActive = url()->current() === url($href) || request()->fullUrlIs($href) || request()->is(ltrim($href,'/'));
@endphp
<a href="{{ $href }}"
   class="nav-item {{ $isActive ? 'nav-item-active' : '' }} flex items-center gap-2">
  @if($icon)<span class="text-lg">{{ $icon }}</span>@endif
  <span>{{ $label }}</span>
</a>
