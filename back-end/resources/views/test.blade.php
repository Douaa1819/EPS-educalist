<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --}}

    <title>Subscribe</title>
    <!-- You can also link to an external CSS file here -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .subscription-form {
            background: #fff;
            padding: 100px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .subscription-form input[type="email"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 5px solid #ccc;
            border-radius: 40px;
        }
        .subscription-form input[type="submit"] {
            background: #cf0a00;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .subscription-form input[type="submit"]:hover {
            background: #b01200;
        }
    </style>
</head>
<body>
    <div class="subscription-form">
        <form action="https://eps-education.mailcoach.app/subscribe/6fafca70-112b-4e63-9689-6871823191f8" method="post">
            <input type="email" name="email" placeholder="Your email address" required>
            <input type="hidden" name="tags" value="tag 1;tag 2">
            <input type="submit" value="Subscribe">
        </form>
    </div>
    
</body>
</html>
