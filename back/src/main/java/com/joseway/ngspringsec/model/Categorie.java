package com.joseway.ngspringsec.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Categorie {

	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		public Long id;
		public String categorie;
		public String retour;

		
		@OneToMany(mappedBy="categorie")
		@JsonIgnore
		private Set<Projet> projets = new HashSet<Projet>();
		
		public Categorie() {}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getCategorie() {
			return categorie;
		}

		public void setCategorie(String categorie) {
			this.categorie = categorie;
		}

		public String getRetour() {
			return retour;
		}

		public void setRetour(String retour) {
			this.retour = retour;
		}

		public Set<Projet> getProjets() {
			return projets;
		}

		public void setProjets(Set<Projet> projets) {
			this.projets = projets;
		}

	
		
}
