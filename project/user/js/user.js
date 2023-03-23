
        function openNav() {
        document.getElementById("mySidenav").style.width = "350px";
        }
        
        function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        }
    
   function openForm() {
      document.getElementById("bg-modal").style.display = "flex";
      document.getElementById("body").style.overflow="hidden"
    }
    
    function closeForm() {
      document.getElementById("bg-modal").style.display = "none";
      document.getElementById("body").style.overflow="scroll";
    }

    function openForm2() {
      document.getElementById("big-container").style.display = "flex";
      document.getElementById("body").style.overflow="hidden"
    }

   function closeForm2(){
        document.getElementById("big-container").style.display = "none";
      document.getElementById("body").style.overflow="scroll";

    }
