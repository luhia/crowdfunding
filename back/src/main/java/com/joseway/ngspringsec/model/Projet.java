package com.joseway.ngspringsec.model;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Projet {

	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		public Long id;
		public String nomprojet;
		public String description;
		public Integer objectif;
		public Integer budget;
		public String image;
		public LocalDate date;
		

		@ManyToOne
		@JoinColumn(name="categorie")
		private Categorie categorie;
		
		
		@OneToMany(mappedBy="projet")
		@JsonIgnore
		private Set<User> users = new HashSet<User>();
		
		public Projet() {}

		
		
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNomprojet() {
			return nomprojet;
		}

		public void setNomprojet(String nomprojet) {
			this.nomprojet = nomprojet;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public Integer getObjectif() {
			return objectif;
		}

		public void setObjectif(Integer objectif) {
			this.objectif = objectif;
		}

		public Integer getBudget() {
			return budget;
		}

		public void setBudget(Integer budget) {
			this.budget = budget;
		}

		public String getImage() {
			return image;
		}

		public void setImage(String image) {
			this.image = image;
		}

		public LocalDate getDate() {
			return date;
		}

		public void setDate(LocalDate date) {
			this.date = date;
		}

		public Categorie getCategorie() {
			return categorie;
		}

		public void setCategorie(Categorie categorie) {
			this.categorie = categorie;
		}

		public Set<User> getUsers() {
			return users;
		}

		public void setUsers(Set<User> users) {
			this.users = users;
		}

}
