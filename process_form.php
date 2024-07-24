<?php
// Database configuration
$servername = "172.105.48.130";
$username = "amitmandal1234"; // Update with your database username
$password = "okzG)&U0Y0tY"; // Update with your database password
$dbname = "collegec_amitmandal"; // Update with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate and sanitize input
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$mobile = isset($_POST['mobile']) ? htmlspecialchars(trim($_POST['mobile'])) : '';
$email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
$comments = isset($_POST['comments']) ? htmlspecialchars(trim($_POST['comments'])) : '';

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO contact_form (name, mobile, email, subject, comments) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $mobile, $email, $subject, $comments);

// Execute the statement
if ($stmt->execute()) {
    echo "<script>
            alert('Your message has been sent successfully!');
            window.location.href = 'your_form_page.html'; // Replace with your form page URL
          </script>";
} else {
    echo "<script>
            alert('Error: " . $stmt->error . "');
          </script>";
}

// Close connections
$stmt->close();
$conn->close();

?>