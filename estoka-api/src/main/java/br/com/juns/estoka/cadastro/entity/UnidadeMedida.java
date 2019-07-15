package br.com.juns.estoka.cadastro.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "TB_UNIDADE_MEDIDA", schema = "comum")
@SequenceGenerator(name = "seq_unidade_medida", sequenceName = "comum.seq_unidade_medida", allocationSize = 1)
public class UnidadeMedida implements Serializable {

    private static final long serialVersionUID = -614353685957600951L;

    @Id
    @Column(name = "UN_ID")
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "seq_unidade_medida")
    private Long id;

    @Column(name = "UN_NOME", nullable = false, length = 20)
    private String nome;

    @Column(name = "UN_DESCRICAO")
    private String descricao;

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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UnidadeMedida cnae = (UnidadeMedida) o;

        return id != null ? id.equals(cnae.id) : cnae.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
