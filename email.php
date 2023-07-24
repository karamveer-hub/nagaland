<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['full_name'];
    $email = $_POST['email'];

    // Set up email parameters
    $to = "vibhash@techworks.co.in"; // Change this to the recipient's email address
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
