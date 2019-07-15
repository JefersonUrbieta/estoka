package br.com.juns.estoka.fornecedor.business;

import br.com.juns.estoka.commons.exception.ParametroInexistenteException;
import br.com.juns.estoka.fornecedor.entity.Fornecedor;
import br.com.juns.estoka.fornecedor.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FornecedorBO {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    public void editarFornecedor(Long id, Fornecedor fornecedor) {

        if (id == null) {
            throw new ParametroInexistenteException("Identificador da Fornecedor está Nulo", null, null);
        }

        Fornecedor fornecedorExistente = fornecedorRepository.getOne(id);


        if (fornecedorExistente == null) {
            throw new ParametroInexistenteException("O Fornecedor a ser editado não está cadastrado", null, null);
        }

        fornecedorRepository.save(fornecedor);
    }
}
