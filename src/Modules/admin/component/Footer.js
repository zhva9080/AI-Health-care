

export const Footer=()=>{
    return(
        <>
        <footer class="footer footer-black  footer-white ">
    <div class="container">
      <div class="row">
        <nav class="footer-nav">
          <ul>
            <li><a target="_blank">AI-HEALTH-CARE</a></li>
            <li><a target="_blank">Admin</a></li>
            <li><a target="_blank">Profile</a></li>
            <li><a target="_blank">Privacy</a></li>
            <li><a target="_blank">About</a></li>

          </ul>
        </nav>
        <div class="credits ml-auto">
          <span class="copyright">
            © <script>
              document.write(new Date().getFullYear())
            </script>, made with <i class="fa fa-heart heart"></i> AI-HEALTH-CARE
          </span>
        </div>
      </div>
    </div>
  </footer>
        
        </>
    )
}