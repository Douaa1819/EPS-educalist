<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderShippedMail;
// use Spatie\Newsletter\Newsletter;
use App\Models\NewsLetter;
use Illuminate\Support\Facades\Http;
use App\Mail\WelcomeEmail;


class NewsletterController extends Controller
{

    public function index(Request $request)
    {
        return view('test');
    }
    public function subscribe(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email',
        ]);

        // Retrieve email from request
        $email = $request->input('email');

        try {
            // Subscribe the user using Mailcoach API
            $response = Http::post('https://eps-education.mailcoach.app/subscribe/6fafca70-112b-4e63-9689-6871823191f8', [
                'email' => $email,
                // 'tags' => 'tag 1;tag 2'
            ]);

            // Check if the subscription was successful
            if ($response->successful()) {
                // Send a welcome email (if needed)
                // Mail::to($email)->send(new WelcomeEmail());

                return response()->json(['message' => 'Subscription successful']);
            } else {
                return response()->json(['message' => 'Mailcoach API subscription failed'], 500);
            }
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function unsubscribe(Request $request)
    {
        $email = $request->input('email');

        try {
            Newsletter::unsubscribe($email);

            // Newsletter::unsubscribe($email, 'subscribers');

            return response()->json(['message' => 'Successfully unsubscribed from newsletter.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to unsubscribe.'], 500);
        }
    }

    // Delete a subscriber
    public function deleteSubscriber(Request $request)
    {
        $email = $request->input('email');

        try {
            Newsletter::delete($email);
            return response()->json(['message' => 'Successfully deleted subscriber.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete subscriber.'], 500);
        }
    }

    // Get subscriber info
    public function getSubscriberInfo(Request $request)
    {
        $email = $request->input('email');

        try {
            $subscriber = Newsletter::getMember($email);

            if (!$subscriber) {
                return response()->json(['error' => 'Subscriber not found.'], 404);
            }

            return response()->json(['subscriber' => $subscriber]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to retrieve subscriber info.'], 500);
        }
    }

    // Check if a user is subscribed
    public function checkSubscriptionStatus(Request $request)
    {
        $email = $request->input('email');

        try {
            $isSubscribed = Newsletter::isSubscribed($email);
            return response()->json(['isSubscribed' => $isSubscribed]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to check subscription status.'], 500);
        }
    }

    // Check if a member exists
    public function hasMember(Request $request)
    {
        $email = $request->input('email');

        try {
            $hasMember = Newsletter::hasMember($email);
            return response()->json(['hasMember' => $hasMember]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to check member status.'], 500);
        }
    }

    // Send a test email
    public function sendTestMail()
    {
            Mail::to('hindchachoua33@gmail.com')->send(new OrderShippedMail());
            return response()->json(['message' => 'Test email sent successfully']);
        
        // } catch (\Exception $e) {
        //     return response()->json(['error' => 'Failed to send test email'], 500);
        // }
    }


}