import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory :Category;
  button:boolean = false;
  currentSet = false;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.currentSet = false;
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })   
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
    this.button=false;
  }

  setTrueButton (){
    this.button=true;
    this.currentSet = true;
 }

  getCurrentCategoryClass(category:Category){
    if(category ==this.currentCategory && this.button == false){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass()
  {
       if(!this.currentCategory){
        return "list-group-item active"
       }
       else{
        return "list-group-item"
       }
  }

}