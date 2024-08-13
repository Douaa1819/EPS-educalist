<!-- resources/views/emails/reset.blade.php -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réinitialisation de Mot de Passe</title>
</head>
<body>
    <h2>Réinitialisation de Mot de Passe</h2>
    <p>Vous recevez cet email car nous avons reçu une demande de réinitialisation de mot de passe pour votre compte.</p>
    <p>Veuillez cliquer sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
    <p><a href="{{ $reset_url }}">Réinitialiser Mot de Passe</a></p>
    <p>Si vous n'avez pas fait cette demande, ignorez cet email.</p>
</body>
</html>
