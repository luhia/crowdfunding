package com.joseway.ngspringsec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joseway.ngspringsec.model.Categorie;
import com.joseway.ngspringsec.services.CategorieService;

@RestController
@RequestMapping(value="/api/categories")
//@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
@PreAuthorize("permitAll()")
public class CategorieControllerApi {

		@Autowired
		private CategorieService cs;
	
		
		
		@GetMapping(value="/{id}")
		public Categorie findById(@PathVariable("id") Long id) {
			return cs.findById(id);
		}
	
	
		
		@GetMapping(value="")
		public List<Categorie> findAll() {
			return cs.findAll();
		}
		
		
		
		@PostMapping(value="")
		public Categorie save(@RequestBody Categorie categorie) {
			return cs.save(categorie);
		}
	
	
		
		@RequestMapping(value="/{id}/delete")
		public Categorie deleteCategorie(@PathVariable("id") Long id) {
			return cs.deleteById(id);
		}
}
