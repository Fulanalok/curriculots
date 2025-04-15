const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Meu Currículo. Todos os direitos
          reservados.
        </p>
        <p>Desenvolvido por [Lucas F V ]</p>
      </div>
    </footer>
  );
}

export default Footer;