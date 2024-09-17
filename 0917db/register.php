<?php 
include 'conncect.php';
if(isset($_POST['signUp'])){
    $vNev=$_POST['vNev'];
    $kNev=$_POST['kNev'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);
    $checkEmail="SELECT * FROM users WHERE email='$email'";
    $result=$conn->query($checkEmail);
    if($result ->num_rows>0){
        echo "Ez az email már regisztrált";
    }
    else{
        $insertQuery = "INSERT INTO users(VezetekNev,KeresztNev,email,password) VALUES ('$vNev','$kNev','$email','$password')";
        if($conn ->query($insertQuery)==true){
            header("location: index.php");
        }
        else{
            echo "Error:".$conn->error;
        }
    }
}
if(isset($_POST['signIn'])){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $password=md5($password);
    $sql= "SELECT * FROM users WHERE email='$email' and password='$password'";
    $result = $conn ->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['email']=$row['email'];
        header("location:homepage.php");
        exit();
    }
    else{
        echo "Email vagy jelszó nem található";
    }
}

?>