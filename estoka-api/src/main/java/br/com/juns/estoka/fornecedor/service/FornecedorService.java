package br.com.juns.estoka.fornecedor.service;

import br.com.juns.estoka.fornecedor.business.FornecedorBO;
import br.com.juns.estoka.fornecedor.entity.Fornecedor;
import br.com.juns.estoka.fornecedor.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/fornecedor")
public class FornecedorService {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    @Autowired
    private FornecedorBO fornecedorBO;

    @RequestMapping(method = RequestMethod.GET)
    public Object buscarTodos() {

        return fornecedorRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public Fornecedor buscarPorId(@PathVariable("id") Long id) {

        return fornecedorRepository.getOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object inserir(@RequestBody Fornecedor fornecedor) {
        return fornecedorRepository.save(fornecedor);
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public void editar(@PathVariable("id") Long id, @RequestBody Fornecedor fornecedor) {

        fornecedorBO.editarFornecedor(id, fornecedor);
    }
}
