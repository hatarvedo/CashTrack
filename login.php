<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>    
    <link rel="stylesheet" href="css/satoshi.css">
    <link rel="stylesheet" href="css/styleHome.css">

    <title>Bejelentkezés @ CashTrack</title>
</head>
<body>
<div class="col-5 col-lg-6 col-md-4 col-sm-5 inline">     
         <img class="cashTrack-logo" src="media/logo/CashTrack-ver2.png" alt="CashTrack Logo">
         <h3 class="text-light">CashTrack</h3>
      </div>
        <div class="buttons colored col-7 col-lg-6 col-md-8 col-sm-7">
          <a class="button-active" href="login.php">Bejelentkezés</a>
          <a href="#">Rólunk</a>
          <a href="connection.html">Kapcsolat</a>
          <a href="javascript:void(0);" class="icon" onclick="navDropdown()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>

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
            <label for="password">Jelszó</label> 
        </div>
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