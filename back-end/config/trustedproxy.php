<?php

return [
    'proxies' => env('TRUSTED_PROXIES', '*'),

    'headers' => [
        \Illuminate\Http\Request::HEADER_X_FORWARDED_FOR,
        \Illuminate\Http\Request::HEADER_X_FORWARDED_HOST,
        \Illuminate\Http\Request::HEADER_X_FORWARDED_PORT,
        \Illuminate\Http\Request::HEADER_X_FORWARDED_PROTO,
        \Illuminate\Http\Request::HEADER_X_FORWARDED_AWS_ELB,
    ],
];
