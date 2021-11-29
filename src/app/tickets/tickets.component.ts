import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  public tickets: any = [];
  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    console.log('init')
    this.ticketsService.getTickets().subscribe(
      tickets => {
        console.log('tickets')
        this.tickets = tickets;
      }, error => {
        console.log(error);
      }
    );
  }

}
