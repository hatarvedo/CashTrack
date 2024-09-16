
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


    <form method="post" action="accounts.php">
        <h1>Regisztráció</h1>
        <div class="RegisterBox">
            <input type="text" placeholder="username"  name="username">
        </div>
        <div class="RegisterBox">
            <input type="password" placeholder="password"  name="password">
        </div>
        <input type="submit" value="Register" class="regBtn" name="reg_Btn">
       
    </form>
    
</body>
</html>
<?php
$nev = $_POST['username'];
$password = $_POST['password'];


$con =mysqli_connect('localhost','root','','adatok');
if($con)
{
    $stmt = $con->prepare("insert into register(nev,password) values( ?, ?)");
    $stmt->bind_param("ss",$nev,$password);
    $stmt->execute();
    $stmt->close();
   
    $con->close();

}
 

/*
$con =mysqli_connect('localhost','root','','adatok');
if(isset($_POST['reg_Btn'])){
    $nev=$_POST ['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM register WHERE username ='$nev";
    $result = mysqli_query($con,$sql);
    while($row = mysqli_fetch_assoc($result)){
        $resultPassword = $row['password'];
        if($password == $resultPassword){
            header('Location:index.html');
        }else{
            echo "<script>
                alert('Login unuccesful');
                </script>";
        }
    }
    $con->close();
} */
?>