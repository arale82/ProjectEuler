export default function Footer(){
  const copyYear = new Date().getFullYear();

  return (
    <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
        <span class="text-body-secondary">Copyright {copyYear} - Alessia Dallera.</span>
      </div>
    </footer>
  );
}