package com.joseway.ngspringsec.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joseway.ngspringsec.model.Projet;
import com.joseway.ngspringsec.repository.ProjetRepository;

@Service
public class ProjetServiceImpl implements ProjetService{

	
		@Autowired
		private ProjetRepository projetRepository;
	
	
		@Override
		public List<Projet> findAll() {
			return projetRepository.findAll();
		}
	
		
		
		@Override
		public Projet save(Projet projet) {
			return projetRepository.save(projet);
		}
	
		
		
		@Override
		public Projet findById(Long id) {
			return projetRepository.findById(id).get();
		}
		
		
		
		@Override
		public Projet deleteById(Long id) {
			Projet temp = findById(id);
			projetRepository.deleteById(id);
			return temp;
			
		}
	

}
