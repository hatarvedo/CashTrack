<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    

    <title>Document</title>
</head>
<body>
    <!--Regisztáció kód-->
    <div class="container" id="signup" style="display: none;">
        <h1 class="form-title">Regisztráció</h1>
        <form method="post" action="register.php">
            <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" name="vNev" id="vNev" placeholder="Vezetéknév" required>
            <label for="vNev">Vezetéknév</label>
        
        </div>
        <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" name="kNev" id="kNev" placeholder="Keresztnév" required>
            <label for="kNev">Keresztnév</label>
        </div>
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Email" required>
            <label for="email">Email</label>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" id="password" placeholder="Jelszó" required>
            <label for="password">Jelszó</label></div>
            <input type="submit" class="btn" value="Regisztráció" name="signUp">
        
        </form>
          <!-- Belépés gomb reg oldalon-->
        <div class="signInDiv">
            <p>Van már fiókod?</p>
            <button id="signInButton">Belépés</button>
        </div>
    </div>

    <!--Belépés kód-->
    <div class="container" id="signIn">
        <h1 class="form-title">Belépés</h1>
        <form method="post" action="register.php">
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" name="email" id="email" placeholder="Email" required>
            <label for="email">Email</label>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" name="password" id="password" placeholder="Jelszó" required>
            <label for="password">Jelszó</label> </div>
            <input type="submit" class="btn" value="Belépés" name="signIn">
             
        </form>
          <!-- reg gomb login oldalon-->
        <div class="signInDiv">
            <p>Nincs még fiókod?</p>
            <button id="signUpButton">Regisztálj!</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>