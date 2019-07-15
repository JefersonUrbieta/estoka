package br.com.juns.estoka.cadastro.business;

import br.com.juns.estoka.cadastro.entity.UnidadeMedida;
import br.com.juns.estoka.cadastro.repository.UnidadeMedidaRepository;
import br.com.juns.estoka.commons.exception.ParametroInexistenteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UnidadeMedidaBO {

    @Autowired
    private UnidadeMedidaRepository unidadeMedidaRepository;

    public void editarUnidadeMedida(Long id, UnidadeMedida unidadeMedida) {

        if (id == null) {
            throw new ParametroInexistenteException("Identificador da Unidade Medida está Nulo", null, null);
        }

        UnidadeMedida unidadeMedidaExistente = unidadeMedidaRepository.getOne(id);


        if (unidadeMedidaExistente == null) {
            throw new ParametroInexistenteException("O Unidade Medida a ser editado não está cadastrado", null, null);
        }

        unidadeMedidaRepository.save(unidadeMedida);
    }
}
