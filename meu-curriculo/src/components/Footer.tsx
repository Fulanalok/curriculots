const Footer = () => {
  return (
    <footer className=" [dark:text-white] py-4">
      <div className="mx-auto text-center">
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