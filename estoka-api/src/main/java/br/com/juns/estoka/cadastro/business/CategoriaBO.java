package br.com.juns.estoka.cadastro.business;

import br.com.juns.estoka.cadastro.entity.Categoria;
import br.com.juns.estoka.cadastro.repository.CategoriaRepository;
import br.com.juns.estoka.commons.exception.ParametroInexistenteException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CategoriaBO {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public void editarCategoria(Long id, Categoria categoria) {

        if (id == null) {
            throw new ParametroInexistenteException("Identificador da Categoria está Nulo", null, null);
        }

        Categoria categoriaExistente = categoriaRepository.getOne(id);


        if (categoriaExistente == null) {
            throw new ParametroInexistenteException("O Categoria a ser editado não está cadastrado", null, null);
        }

        categoriaRepository.save(categoria);
    }
}
