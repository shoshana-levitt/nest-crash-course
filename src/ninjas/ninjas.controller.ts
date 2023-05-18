import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { NotFoundException } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  // GET /ninjas --> []
  // /ninjas?weapon=fast
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getNinja(+id); // + makes sure type expects a number
    } catch (err) {
      throw new NotFoundException();
    }
  }

  // POST /ninjas --> Create ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    // Parse body
    return this.ninjasService.createNinja(createNinjaDto);
  }

  // PUT /ninjas/:id --> {...} --> Update ninja
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
