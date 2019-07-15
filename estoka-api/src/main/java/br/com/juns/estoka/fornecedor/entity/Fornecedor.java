package br.com.juns.estoka.fornecedor.entity;

import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@DynamicUpdate
@Table(name = "TB_FORNECEDOR", schema = "comum")
@SequenceGenerator(name = "seq_fornecedor", sequenceName = "comum.seq_fornecedor", allocationSize = 1)
public class Fornecedor implements Serializable {

    private static final long serialVersionUID = -614353685957600951L;

    @Id
    @Column(name = "FO_ID")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "seq_fornecedor")
    private Long id;

    @Column(name = "FO_NOME", nullable = false, length = 20)
    private String nome;

    @Column(name = "FO_CNPJ")
    private String cnpj;

    @Column(name = "FO_TELEFONE")
    private String telefone;

    @Column(name = "FO_EMAIL")
    private String email;

    @Column(name = "FO_OBSERVACOES")
    private String observacoes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        Fornecedor cnae = (Fornecedor) o;

        return id != null ? id.equals(cnae.id) : cnae.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
