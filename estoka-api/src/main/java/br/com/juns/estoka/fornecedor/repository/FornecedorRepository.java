package br.com.juns.estoka.fornecedor.repository;

import br.com.juns.estoka.fornecedor.entity.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {

}
