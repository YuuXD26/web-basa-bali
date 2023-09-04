var navLinks = document.getElementById("nav-items");
        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-300px";
        }

        function showInstagramPopup(event) {
            event.preventDefault();
            document.getElementById("instagramPopup").style.display = "block";
        }
        
        function hideInstagramPopup() {
            document.getElementById("instagramPopup").style.display = "none";
        }

        function showFacebookPopup(event) {
            event.preventDefault();
            document.getElementById("facebookPopup").style.display = "block";
        }

        function hideFacebookPopup() {
            document.getElementById("facebookPopup").style.display = "none";
        }

        function showGithubPopup(event) {
            event.preventDefault();
            document.getElementById("gitHubPopup").style.display = "block";
        }

        function hideGithubPopup() {
            document.getElementById("gitHubPopup").style.display = "none";
        }

        function showGmailPopup(event) {
            event.preventDefault();
            document.getElementById("gmailPopup").style.display = "block";
        }

        function hideGmailPopup() {
            document.getElementById("gmailPopup").style.display = "none";
        }

