package com.joseway.ngspringsec.services;

import java.util.List;

import com.joseway.ngspringsec.model.Proposition;

public interface PropositionService {

		public List<Proposition> findAll();
		public Proposition save(Proposition proposition);
		public Proposition findById(Long id);
		public Proposition deleteById(Long id);
	
}