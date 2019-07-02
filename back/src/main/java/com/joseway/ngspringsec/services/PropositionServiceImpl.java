package com.joseway.ngspringsec.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joseway.ngspringsec.model.Proposition;
import com.joseway.ngspringsec.repository.PropositionRepository;

@Service
public class PropositionServiceImpl implements PropositionService{

	
		@Autowired
		private PropositionRepository propositionRepository;
	
	
		@Override
		public List<Proposition> findAll() {
			return propositionRepository.findAll();
		}
	
		
		
		@Override
		public Proposition save(Proposition proposition) {
			return propositionRepository.save(proposition);
		}
	
		
		
		@Override
		public Proposition findById(Long id) {
			return propositionRepository.findById(id).get();
		}
		
		
		
		@Override
		public Proposition deleteById(Long id) {
			Proposition temp = findById(id);
			propositionRepository.deleteById(id);
			return temp;
			
		}
	

}

