package br.com.juns.estoka.commons.exception;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class GenericException extends RuntimeException {

    private static final long serialVersionUID = -3690969920342399994L;

    private final String[] parameters;

    public GenericException(String message, Throwable cause, String... parameters) {
        super(message, cause);
        this.parameters = parameters;
    }

    public GenericException(String... parameters) {
        this.parameters = parameters;
    }

    public String[] getParameters() {
        return this.parameters;
    }

    public String getMessage() {
        ObjectMapper mapper = new ObjectMapper();

        try {
            if (this.parameters != null && this.parameters.length > 0) {
                return mapper.writeValueAsString(this.parameters);
            }
        } catch (JsonProcessingException var3) {
            var3.printStackTrace();
        }

        return super.getMessage();
    }
}
