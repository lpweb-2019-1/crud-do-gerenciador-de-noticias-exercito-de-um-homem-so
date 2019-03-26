import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = null;
  descricao = null;
  date = null;
  noticias = [];
  categoria= null;
  tags = null;
  editora = null;
  alterar = null;
  publicar = null;

  mostrar(noticia) 
  {
    noticia.visivel = true;
    
  };
  fechar(noticia)
  {
    noticia.visivel = false;  
  };
  salvar() 
  {
    if (this.alterar){
      this.alterar.titulo = this.titulo;
      this.alterar.descricao = this.descricao;
      this.alterar.date = this.date;
      this.alterar.categoria = this.categoria;
      this.alterar.tags = this.tags;
      this.alterar.editora = this.editora;
      this.alterar.publicar = this.publicar;
      
    }else{
        const noticia = {
        id: Math.random(),
        titulo: this.titulo, 
        descricao: this.descricao,
        date: this.date,
        categoria: this.categoria,
        tags: this.tags,
        editora: this.editora,
        publicar: this.publicar,
        visivel: false };
        this.noticias.push(noticia);
    }    
    this.titulo = null;
    this.descricao = null;
    this.date = null;
    this.categoria = null;
    this.tags = null;
    this.editora = null;
    this.publicar = null;

  };
  editar(noticia) 
  {
  this.alterar = noticia
  this.titulo = noticia.titulo;
  this.descricao = noticia.descricao;
  this.date = noticia.date;
  this.tags = noticia.tags;
  this.categoria = noticia.categoria;
  this.editora = noticia.editora;
  this.publicar = noticia.publicar;
  }
  
  delete(noticia)
  {
  if (confirm('Deseja excluir noticia "'+noticia.titulo+'" ?'))
  {
    this.noticias = this.noticias.filter(item =>  item.id != noticia.id)
  };
 
  };
 
}
