
package com.portfolio.pnodari.Controller;

import com.portfolio.pnodari.Entity.Persona;
import com.portfolio.pnodari.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PersonaController {
    @Autowired
    IPersonaService iPersonaService;
    
    /*
    *Solo el Admin puede crear, editar y eliminar (Se agrega una pre autorizacion)
    *El user solo puede ver el portfolio
    */
    
    //Read
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){        
        return iPersonaService.getPersona();
    }    
    //Create
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona pers){
         iPersonaService.savePersona(pers);
         return "Se ha agregado la parsona a la Base de datos";
    }
    //Delete
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        iPersonaService.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }
    //Update
    //URL:PUERTO/personas/id/nombre & apellido & img
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam ("nombre") String nuevoNombre,
                               @RequestParam ("apellido") String nuevoApellido,
                               @RequestParam ("profecion") String nuevoProfecion,
                               @RequestParam ("descripcion") String nuevoDescripcion,
                               @RequestParam ("img") String nuevoImg){
        Persona findPersona=iPersonaService.findPersona(id);
        findPersona.setNombre(nuevoNombre);
        findPersona.setApellido(nuevoApellido);
        findPersona.setProfecion(nuevoProfecion);
        findPersona.setDescripcion(nuevoDescripcion);
        findPersona.setImg(nuevoImg);
        
        iPersonaService.savePersona(findPersona);
        
        return findPersona;
    }
    //Find
    @GetMapping("/personas/traer/perfil")
    public Persona findPersona(){
        return iPersonaService.findPersona((long)3);
    }
}
