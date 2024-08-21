<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
    <center>
        <?php

        // servername => localhost
        // username => root
        // password => empty
        // database name => staff
        $conn = mysqli_connect("localhost", "root", "", "mike_phillip_limited");

        // Check connection
        if ($conn === false) {
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }

        // Taking all 5 values from the form data(input)
        $name = $_REQUEST['name'];
        $contact_number = $_REQUEST['contact_number'];
        $email = $_REQUEST['email'];
        $location = $_REQUEST['location'];
        $specific_location = $_REQUEST['specific_location'];
        $query = $_REQUEST['query'];
        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO Queries VALUES ('$name',
			'$contact_number','$email','$location','$specific_location','$query')";

        if (mysqli_query($conn, $sql)) {
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";

            echo nl2br("\n$name\n $contact_number\n "
                . "$email\n $location\n $specific_location\n $query");
        } else {
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }

        // Close connection
        mysqli_close($conn);
        ?>
    </center>
</body>

</html>