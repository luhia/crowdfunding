package com.joseway.ngspringsec.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joseway.ngspringsec.model.Categorie;
import com.joseway.ngspringsec.repository.CategorieRepository;



@Service
public class CategorieServiceImpl implements CategorieService{

		@Autowired
		private CategorieRepository categorieRepository;
		
		
		
		@Override
		public List<Categorie> findAll() {
			return categorieRepository.findAll();
		}
	
		
		
		@Override
		public Categorie save(Categorie categorie) {
			return categorieRepository.save(categorie);
		}
	
		
		
		@Override
		public Categorie findById(Long id) {
			return categorieRepository.findById(id).get();
		}		
		
		
	
		@Override
		public Categorie deleteById(Long id) {
			Categorie temp = findById(id);
			categorieRepository.deleteById(id);
			return temp;
		}
}
