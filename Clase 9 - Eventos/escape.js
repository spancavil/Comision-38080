  //Ver qué sucede sin el return
  
  //On escape it will close
  useEffect(() => {
    const handleEsc = (event) => {

      console.log(event) //Evento nativo del browser
          
        if (event.keyCode === 27) {
          console.log('will close')
        }
      };

      window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [])