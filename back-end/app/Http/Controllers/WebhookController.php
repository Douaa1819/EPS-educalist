<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail;

class WebhookController extends Controller
{
    public function handleSubscription(Request $request)
    {
        // Verify the secret
        if ($request->header('X-Mailcoach-Signature') !== env('MAILCOACH_SECRET')) {
            return response()->json(['status' => 'Unauthorized'], 401);
        }

        $email = $request->input('email');

        if ($email) {
            // Send a welcome email
            Mail::to($email)->send(new WelcomeEmail());
        }

        return response()->json(['status' => 'success']);
    }
}
