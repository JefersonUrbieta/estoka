package br.com.juns.estoka.cadastro.service;

import br.com.juns.estoka.cadastro.business.CategoriaBO;
import br.com.juns.estoka.cadastro.entity.Categoria;
import br.com.juns.estoka.cadastro.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/categoria")
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private CategoriaBO categoriaBO;

    @RequestMapping(method = RequestMethod.GET)
    public Object buscarTodos() {

        return categoriaRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public Categoria buscarPorId(@PathVariable("id") Long id) {

        return categoriaRepository.getOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object inserir(@RequestBody Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public void editar(@PathVariable("id") Long id, @RequestBody Categoria categoria) {

        categoriaBO.editarCategoria(id, categoria);
    }
}
