package br.com.juns.estoka.cadastro.service;

import br.com.juns.estoka.cadastro.business.UnidadeMedidaBO;
import br.com.juns.estoka.cadastro.entity.UnidadeMedida;
import br.com.juns.estoka.cadastro.repository.UnidadeMedidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/unidade-medida")
public class UnidadeMedidaService {

    @Autowired
    private UnidadeMedidaRepository unidadeMedidaRepository;

    @Autowired
    private UnidadeMedidaBO unidadeMedidaBO;

    @RequestMapping(method = RequestMethod.GET)
    public Object buscarTodos() {

        return unidadeMedidaRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public UnidadeMedida buscarPorId(@PathVariable("id") Long id) {

        return unidadeMedidaRepository.getOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Object inserir(@RequestBody UnidadeMedida unidadeMedida) {
        return unidadeMedidaRepository.save(unidadeMedida);
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public void editar(@PathVariable("id") Long id, @RequestBody UnidadeMedida unidadeMedida) {

        unidadeMedidaBO.editarUnidadeMedida(id, unidadeMedida);
    }
}
