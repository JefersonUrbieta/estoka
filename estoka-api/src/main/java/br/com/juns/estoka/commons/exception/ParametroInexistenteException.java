package br.com.juns.estoka.commons.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class ParametroInexistenteException extends GenericException {

    public ParametroInexistenteException() {
        // Construtor padrao
    }

    public ParametroInexistenteException(String message, Throwable cause, String[] parameters) {
        super(message, cause, parameters);
    }
}
