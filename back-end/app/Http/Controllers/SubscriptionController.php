<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\Subsecribers;

class SubscriptionController extends Controller
{
    public function subscribe(Request $request)
    {
        // Validate the request
        $request->validate([
            'email' => 'required|email|unique:subsecribers,email',
        ]);

        // Retrieve email from request
        $email = $request->input('email');

        try {
            Log::info('Subscribing email:', ['email' => $email]);

            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
            ])->post('https://eps-education.mailcoach.app/subscribe/6fafca70-112b-4e63-9689-6871823191f8', [
                'email' => $email,
                // 'tags' => 'tag 1;tag 2'
            ]);

            Log::info('Mailcoach response:', ['status' => $response->status(), 'body' => $response->body()]);

            if ($response->status() === 422) {
                $body = json_decode($response->body(), true);
                if (isset($body['errors']) && strpos($body['errors'], 'email_already_subscribed') !== false) {
                    return response()->json(['message' => 'You are a real one! You are already subscribed'], 200);
                }
            }

            if ($response->successful()) {
                // Insert the email into the subscribers table
                Subsecribers::create(['email' => $email]);

                return response()->json(['message' => 'Subscription successful']);
            } else {
                Log::error('Mailcoach subscription failed:', ['status' => $response->status(), 'body' => $response->body()]);
                return response()->json(['message' => 'Mailcoach API subscription failed'], 500);
            }
        } catch (\Exception $e) {
            Log::error('Subscription exception:', ['message' => $e->getMessage()]);
            return response()->json(['message' => 'Subscription failed'], 500);
        }
    }
    public function allSubsecribers(Request $request)
    {
        // Fetch all subscribers from the database
        $subscribers = Subsecribers::all();

        // Return the subscribers as a JSON response
        return response()->json($subscribers);
    }
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:subsecribers,email',
        ]);

        $subscriber = Subsecribers::create(['email' => $request->input('email')]);
        $subscriber->save();

        return response()->json(['subsecriber' => $subscriber], 201);
    }

    public function show($id)
    {
        $subscriber = Subsecribers::findOrFail($id);
        return response()->json($subscriber);
    }

    public function update(Request $request, $id)
    {
        $subscriber = Subsecribers::findOrFail($id);
    
        $request->validate([
            'email' => 'required|email',
            // Add other validation rules if necessary
        ]);
    
        $subscriber->email = $request->input('email');
        // Update other fields as needed
    
        $subscriber->save();
    
        return response()->json(['subscriber' => $subscriber]);
    }
    
    public function destroy($id)
    {
        $subscriber = Subsecribers::findOrFail($id);
        $subscriber->delete();

        return response()->json(['message' => 'Subscriber deleted successfully']);
    }
}
