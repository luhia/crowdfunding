package com.joseway.ngspringsec.model;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Proposition {

	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		public Long id;
		public String nomproposition;
		public String descriptionprojet;
		public Integer objectifprojet;
		public String categorievoulue;
		public String imageproposee;
		public LocalDate dateproposee;
		
		public Proposition() {}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getNomproposition() {
			return nomproposition;
		}

		public void setNomproposition(String nomproposition) {
			this.nomproposition = nomproposition;
		}

		public String getDescriptionprojet() {
			return descriptionprojet;
		}

		public void setDescriptionprojet(String descriptionprojet) {
			this.descriptionprojet = descriptionprojet;
		}

		public Integer getObjectifprojet() {
			return objectifprojet;
		}

		public void setObjectifprojet(Integer objectifprojet) {
			this.objectifprojet = objectifprojet;
		}

		public String getCategorievoulue() {
			return categorievoulue;
		}

		public void setCategorievoulue(String categorievoulue) {
			this.categorievoulue = categorievoulue;
		}

		public String getImageproposee() {
			return imageproposee;
		}

		public void setImageproposee(String imageproposee) {
			this.imageproposee = imageproposee;
		}

		public LocalDate getDateproposee() {
			return dateproposee;
		}

		public void setDateproposee(LocalDate dateproposee) {
			this.dateproposee = dateproposee;
		}



}
