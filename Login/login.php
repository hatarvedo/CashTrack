<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <form method="post" action="login.php">
        <h1>Belépés</h1>
        <div class="loginBox">
            <input type="text" placeholder="username" name="username">
        </div>
        <div class="loginBox">
            <input type="password" placeholder="password" name="password">
        </div>
        <input type="submit" value="Login" class="loginBtn" name="login-Btn">
        <div class="signUp">
            Nincs még fiókod? </br>
            <a href="#">Regisztráció</a>
        </div>
    </form>
    
</body>
</html>
<?php
$con=mysqli_connect("localhost","root","","adatok");
if(isset($_POST['login_Btn'])){
    $username=$_POST ['username'];
    $password = $_POST['password'];
    $sql = "SELECT * from register r WHERE username = '$username'";
    $result = mysqli_query($con,$sql);
    while($row = mysqli_fetch_assoc($result)){
        $resultPassword = $row['password'];
        if($password == $resultPassword){
            header('Location:index.html');
            echo("<script>
                alert('Login succesful');
                </script>");
        }else{
            echo "<script>
                alert('Login unuccesful');
                </script>";
        }
    }
}


?>