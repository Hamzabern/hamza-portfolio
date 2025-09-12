<?php

namespace App\View\Components\Admin;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class NavItem extends Component {
    public string $href; public string $label; public ?string $icon;
    public function __construct(string $href, string $label, string $icon=null){ $this->href=$href; $this->label=$label; $this->icon=$icon; }
    public function render(){ return view('components.admin.nav-item'); }
}
