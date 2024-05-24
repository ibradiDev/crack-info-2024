import { Component, OnInit } from "@angular/core";
import { CrackInfoService } from "../../services/crack-info.service";
import { RouterLink } from "@angular/router";

import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';



@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [TableModule, DividerModule, RouterLink],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})

export class DataTableComponent implements OnInit {
  crackDataSource = <any>[];

  constructor(private crackService: CrackInfoService) { }

  ngOnInit(): void {
    this.crackService.getAllCrackData().subscribe({
      next: (res: any) => this.crackDataSource = res.crackData,
      error: (err) => console.error("Error", err.getMessaging()),
      complete: () => console.log("Fin de taitement.")
    })
  }
}
